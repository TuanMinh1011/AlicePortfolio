import React from 'react'
import '../styles/HomePage.css'
import games from '../data/games.json'
import team from '../data/team.json'
import { getAssetUrl } from '../utils/assets'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>Alice Portfolio</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#team">Nhóm</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Chào mừng đến với Alice Portfolio</h1>
          <p className="hero-subtitle">
            Khám phá các tựa game tuyệt vời được tạo bởi chúng tôi
          </p>
          <button className="cta-button">Xem Games</button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Featured Games Section */}
      <section id="games" className="games-section">
        <div className="container">
          <h2 className="section-title">Games Nổi Bật</h2>
          <div className="games-grid">
            {games.map(game => (
              <div className="game-card" key={game.id}>
                {game.mainImage ? (
                  <div className="game-image" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                    <img
                      src={getAssetUrl(game.mainImage)}
                      alt={game.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ) : (
                  <div className="game-image placeholder-image">
                    <span>{game.title}</span>
                  </div>
                )}
                <div className="game-info">
                  <h3>{game.title}</h3>
                  {Array.isArray(game.descriptions) && game.descriptions.map((line, idx) => (
                    <p key={`${game.id}-desc-${idx}`}>{line}</p>
                  ))}
                  <button
                    className="game-button"
                    onClick={() => {
                      window.location.hash = `#/games/${game.id}`
                    }}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">Về Nhóm</h2>
          <p className="team-description">
            Chúng tôi là một nhóm đam mê phát triển game, tạo ra những trải nghiệm 
            thú vị và độc đáo cho người chơi.
          </p>

          <div className="team-grid">
            {team.slice(0, 4).map(member => (
              <div key={member.id} className="game-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => (window.location.hash = `#/team/${member.id}`)}>
                <div style={{ width: '100%', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
                  <img
                    src={getAssetUrl(member.avatar)}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="game-info">
                  <h3>{member.name}</h3>
                  <p style={{ margin: 0, color: '#666' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Game Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

