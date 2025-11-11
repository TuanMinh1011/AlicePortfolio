import React from 'react'
import team from '../data/team.json'
import { getAssetUrl } from '../utils/assets'
import '../styles/HomePage.css'

const getMemberIdFromHash = () => {
  const match = window.location.hash.match(/^#\/team\/(\d+)/)
  return match ? parseInt(match[1], 10) : null
}

const TeamDetail = () => {
  const memberId = getMemberIdFromHash()
  const member = team.find(m => m.id === memberId)

  if (!member) {
    return (
      <div className="container" style={{ paddingTop: '120px' }}>
        <h2>Không tìm thấy thành viên</h2>
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
            <li><a href="#/team">Nhóm</a></li>
          </ul>
        </div>
      </nav>

      <section className="games-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <img
              src={getAssetUrl(member.avatar)}
              alt={member.name}
              style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>{member.name}</h2>
              <p style={{ marginBottom: '8px', color: '#555' }}><strong>Role:</strong> {member.role}</p>
              <p style={{ color: '#666' }}>{member.about}</p>
              {member.portfolioLink && (
                <div style={{ marginTop: '12px' }}>
                  <a href={member.portfolioLink} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'underline', fontWeight: 600 }}>
                    Mở portfolio cá nhân
                  </a>
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button className="game-button" onClick={() => (window.location.hash = '#/')}>Quay lại</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Game Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  )
}

export default TeamDetail


