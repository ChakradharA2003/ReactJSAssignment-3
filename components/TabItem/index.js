import './index.css'

const TabItem = props => {
  const {tabsList, isActive, onTabClicked} = props
  const tabColor = isActive ? 'active-tab-btn' : 'tab-btn'
  const {tabId, displayText} = tabsList
  const tabChanged = () => {
    onTabClicked(tabId)
  }
  return (
    <li className="tab-list">
      <button type="button" className={tabColor} onClick={tabChanged}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
