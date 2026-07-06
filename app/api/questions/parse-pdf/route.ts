import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Please upload a valid PDF file' },
        { status: 400 }
      );
    }

    // Convert the File to a Buffer for pdf-parse
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Dynamic import — cast through any to handle ESM/CJS export differences
    const pdfModule: any = await import('pdf-parse');
    const pdfParse = pdfModule.default ?? pdfModule;
    const parsed = await pdfParse(buffer);

    const text = parsed.text?.trim() || '';

    if (!text) {
      return NextResponse.json(
        { error: 'Could not extract any text from this PDF. It may be scanned/image-based.' },
        { status: 422 }
      );
    }

    return NextResponse.json({
      text,
      pages: parsed.numpages,
      chars: text.length,
    });
  } catch (error: any) {
    console.error('PDF parse error:', error);
    return NextResponse.json(
      { error: 'Failed to parse PDF file' },
      { status: 500 }
    );
  }
}
