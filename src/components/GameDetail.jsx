import React from 'react'
import games from '../data/games.json'
import '../styles/HomePage.css'

const getGameIdFromHash = () => {
  const match = window.location.hash.match(/^#\/games\/(\d+)/)
  return match ? parseInt(match[1], 10) : null
}

const GameDetail = () => {
  const gameId = getGameIdFromHash()
  const game = games.find(g => g.id === gameId)
  const [lightboxSrc, setLightboxSrc] = React.useState(null)

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  if (!game) {
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <h2>Không tìm thấy game</h2>
        <button className="game-button" onClick={() => (window.location.hash = '#/')}>Quay lại</button>
      </div>
    )
  }

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>Alice Portfolio</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#/">Trang chủ</a></li>
            <li><a href="#/games">Games</a></li>
          </ul>
        </div>
      </nav>

      <section className="games-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="game-detail-header">
            <h2 className="section-title">{game.title}</h2>
            <div className="game-detail-hero">
              {game.mainImage ? (
                <img
                  src={game.mainImage}
                  alt={game.title}
                  style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
                />
              ) : (
                <div className="game-image placeholder-image" style={{ height: '320px' }}>
                  <span>{game.title}</span>
                </div>
              )}
            </div>
          </div>

          <div className="game-detail-info" style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
            <div>
              <h3>Thông tin</h3>
              <p><strong>When:</strong> {game.when || 'Đang cập nhật'}</p>
              <p><strong>Who:</strong> {game.who || 'Đang cập nhật'}</p>
            </div>

            {game.downloadLink && (
              <div>
                <h3>Download or watching video</h3>
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#667eea', textDecoration: 'underline', fontWeight: 600 }}
                >
                  Click here to open link driver.
                </a>
              </div>
            )}

            <div>
              <h3>Mô tả</h3>
              {Array.isArray(game.descriptions) && game.descriptions.length > 0 ? (
                game.descriptions.map((line, idx) => <p key={`desc-${idx}`}>{line}</p>)
              ) : (
                <p>Đang cập nhật mô tả.</p>
              )}
            </div>

            <div>
              <h3>Hình ảnh / Video liên quan</h3>
              <div className="media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {Array.isArray(game.media) && game.media.length > 0 ? (
                  game.media.map((m, idx) => (
                    m.type === 'video' ? (
                      <div key={`media-${idx}`} className="media-item" style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <iframe
                          src={m.src}
                          title={`video-${idx}`}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '12px' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <img
                        key={`media-${idx}`}
                        src={m.src}
                        alt={`media-${idx}`}
                        style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '180px', cursor: 'zoom-in' }}
                        onClick={() => setLightboxSrc(m.src)}
                      />
                    )
                  ))
                ) : (
                  <p>Chưa có media.</p>
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button className="game-button" onClick={() => (window.location.hash = '#/')}>Quay lại</button>
          </div>
        </div>
      </section>

      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '24px'
          }}
        >
          <img
            src={lightboxSrc}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '95%',
              maxHeight: '90%',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
              objectFit: 'contain'
            }}
          />
          <button
            onClick={() => setLightboxSrc(null)}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              padding: '8px 12px',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Game Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  )
}

export default GameDetail


