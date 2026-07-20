import { renderToBuffer } from '@react-pdf/renderer';
import { StudyPlannerDocument } from './StudyPlannerDocument';

export async function renderStudyPlannerPdf(): Promise<Buffer> {
  return renderToBuffer(<StudyPlannerDocument />);
}
