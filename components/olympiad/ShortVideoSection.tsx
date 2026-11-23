import { OLYMPIAD_SHORT, type ShortVideo } from './videos';

/**
 * A "watch" section with a vertical YouTube Short beside a short heading.
 * Self-contained (inline styles, no Tailwind/site CSS dependency) so it can be
 * dropped into both the olympiad component pages and the older site templates.
 */
export default function ShortVideoSection({ video = OLYMPIAD_SHORT }: { video?: ShortVideo }) {
  return (
    <section
      id="watch"
      aria-label={video.heading}
      style={{ padding: 'clamp(40px,6vw,72px) 24px' }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(28px,5vw,64px)',
        }}
      >
        <div style={{ flex: '1 1 320px', maxWidth: 520 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(37,99,235,.12)',
              color: '#2563EB',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
            }}
          >
            Watch
          </span>
          <h2
            style={{
              margin: '14px 0 12px',
              fontSize: 'clamp(26px,3.6vw,38px)',
              fontWeight: 800,
              lineHeight: 1.2,
              textWrap: 'balance',
            }}
          >
            {video.heading}
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, opacity: 0.75 }}>{video.description}</p>
        </div>

        <div
          style={{
            flex: '0 0 auto',
            width: 'min(100%, 300px)',
            aspectRatio: '9 / 16',
            borderRadius: 24,
            overflow: 'hidden',
            background: '#0F172A',
            boxShadow: '0 18px 48px rgba(15,23,42,.25)',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
