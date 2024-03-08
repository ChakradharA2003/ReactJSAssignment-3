import './index.css'

const Navbar = props => {
  const {score, time} = props
  return (
    <nav className="nav-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo-image"
      />
      <div className="nav-details-container">
        <div className="score-container">
          <p className="score-heading">Score: </p>
          <p className="score">{score}</p>
        </div>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="time">{time} secs</p>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
