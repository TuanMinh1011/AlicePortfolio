import React from 'react'
import '../styles/HomePage.css'

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
            <div className="game-card">
              <div className="game-image placeholder-image">
                <span>Game 1</span>
              </div>
              <div className="game-info">
                <h3>Tựa Game 1</h3>
                <p>Mô tả ngắn về game đầu tiên của chúng tôi</p>
                <button className="game-button">Xem chi tiết</button>
              </div>
            </div>
            <div className="game-card">
              <div className="game-image placeholder-image">
                <span>Game 2</span>
              </div>
              <div className="game-info">
                <h3>Tựa Game 2</h3>
                <p>Mô tả ngắn về game thứ hai của chúng tôi</p>
                <button className="game-button">Xem chi tiết</button>
              </div>
            </div>
            <div className="game-card">
              <div className="game-image placeholder-image">
                <span>Game 3</span>
              </div>
              <div className="game-info">
                <h3>Tựa Game 3</h3>
                <p>Mô tả ngắn về game thứ ba của chúng tôi</p>
                <button className="game-button">Xem chi tiết</button>
              </div>
            </div>
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

