import { getMousePosition } from 'board/utils/svg'
import createPostIt from './createPostIt'
import { getPostItColor } from './colors'

const TEMPLATE = `
    <svg viewBox="0 0 1000 700" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>options-board</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="949" height="649"></rect>
    </defs>
    <g id="options-board" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="axis" transform="translate(15.000000, 50.000000)">
            <path d="M35,600 L35,0" id="Line" stroke="#000000" stroke-linecap="square"></path>
            <path d="M35,600 L935,600" id="Line" stroke="#000000" stroke-linecap="square"></path>
            <text id="value" font-family="ArialMT, Arial" font-size="18" font-weight="normal" letter-spacing="-0.003599999" fill="#000000">
                <tspan x="463.493375" y="630">value</tspan>
            </text>
            <text id="cost" transform="translate(10.000000, 300.000000) rotate(-90.000000) translate(-10.000000, -300.000000) " font-family="ArialMT, Arial" font-size="18" font-weight="normal" letter-spacing="-0.003599999" fill="#000000">
                <tspan x="-6.49865938" y="306">cost</tspan>
            </text>
        </g>
        <g id="content" transform="translate(51.000000, 0.000000)">
            <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
            </mask>
            <use id="Mask" fill="#FFFFFF" xlink:href="#path-1"></use>
            <g mask="url(#mask-2)">
                <g transform="translate(-13.000000, 35.561644)">
                    <path d="M197,620.277134 C299.724963,620.277134 383,572.512663 383,513.592202 C383,454.671742 299.724963,406.907271 197,406.907271 C94.2750365,406.907271 11,454.671742 11,513.592202 C11,572.512663 94.2750365,620.277134 197,620.277134 Z" id="Oval" stroke="#979797" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12,12"></path>
                    <path d="M321.5,380.236038 C485.804713,380.236038 619,340.585404 619,291.673867 C619,242.762331 485.804713,203.111697 321.5,203.111697 C157.195287,203.111697 24,242.762331 24,291.673867 C24,340.585404 157.195287,380.236038 321.5,380.236038 Z" id="Oval" stroke="#979797" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12,12"></path>
                    <path d="M197,186.014752 C305.800096,186.014752 394,144.373932 394,93.0073762 C394,41.6408207 305.800096,0 197,0 C88.1999043,0 0,41.6408207 0,93.0073762 C0,144.373932 88.1999043,186.014752 197,186.014752 Z" id="Oval" stroke="#979797" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12,12"></path>
                    <path d="M710,231.150685 C802.231553,231.150685 877,179.405842 877,115.575342 C877,51.7448434 802.231553,0 710,0 C617.768447,0 543,51.7448434 543,115.575342 C543,179.405842 617.768447,231.150685 710,231.150685 Z" id="Oval" stroke="#979797" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12,12"></path>
                    <path d="M647.828125,640.333986 C766.017061,640.333986 975.507812,533.635733 975.507812,451.896322 C975.507812,426.753239 942.087424,360.335461 926.09375,339.59921 C890.092469,292.922532 834.810524,266.092723 752.976563,266.092723 C614.968515,266.092723 629.484375,373.087697 536.625,396.169773 C487.495712,408.381851 348.804688,453.213355 348.804688,507.46829 C348.804688,589.2077 529.639189,640.333986 647.828125,640.333986 Z" id="Oval" stroke="#979797" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12,12"></path>
                    <text id="Momentum-Builders" stroke="none" font-family="Arial-BoldMT, Arial" font-size="38" font-weight="bold" letter-spacing="-0.0075999978">
                        <tspan x="85.2032516" y="502.172813" fill="#F5A623">Momentum</tspan>
                        <tspan x="110.511845" y="544.172813" fill="#F5A623">Builders</tspan>
                    </text>
                    <text id="Quick-Wins" stroke="none" font-family="Arial-BoldMT, Arial" font-size="38" font-weight="bold" letter-spacing="-0.007599998">
                        <tspan x="667.721637" y="474.133825" fill="#417505">Quick</tspan>
                        <tspan x="675.297427" y="516.133825" fill="#417505">Wins</tspan>
                    </text>
                    <text id="Bridges" stroke="none" font-family="Arial-BoldMT, Arial" font-size="38" font-weight="bold" letter-spacing="-0.007599998">
                        <tspan x="251.286854" y="305.015806" fill="#4A90E2">Bridges</tspan>
                    </text>
                    <text id="Disruptors" stroke="none" font-family="Arial-BoldMT, Arial" font-size="38" font-weight="bold" letter-spacing="-0.007599998">
                        <tspan x="613.971105" y="120.368809" fill="#D0021B">Disruptors</tspan>
                    </text>
                    <text id="Necessary-Evils" stroke="none" font-family="Arial-BoldMT, Arial" font-size="38" font-weight="bold" letter-spacing="-0.007599998">
                        <tspan x="87.4507039" y="85.0073762" fill="#4A4A4A">Necessary</tspan>
                        <tspan x="138.154742" y="127.007376" fill="#4A4A4A">Evils</tspan>
                    </text>
                </g>
            </g>
        </g>
    </g>

    </svg>
`

const DRAGGABLE_CLASS = 'draggable'

const DEFAULT_POST_IT_ATTRS = {
  class: DRAGGABLE_CLASS,
  width: 127,
  height: 76
}

const isDraggable = element => element.classList.contains(DRAGGABLE_CLASS)

class Board extends HTMLElement {
  constructor () {
    super()
    this.currentDraggable = undefined
    this.currentOffset = undefined

    this.startDrag = this.startDrag.bind(this)
    this.onDrag = this.onDrag.bind(this)
    this.endDrag = this.endDrag.bind(this)
    this.render = this.render.bind(this)
  }

  static get observedAttributes () {
    return ['data']
  }

  get data () {
    if (!this.hasAttribute('data')) {
      return []
    }

    return JSON.parse(this.getAttribute('data'))
  }

  set data (obj) {
    this.setAttribute('data', JSON.stringify(obj))
  }

  startDrag (event) {
    const { target } = event
    if (isDraggable(target)) {
      const offset = getMousePosition(this.svg, event)

      offset.x -= parseFloat(target.getAttributeNS(null, 'x'))
      offset.y -= parseFloat(target.getAttributeNS(null, 'y'))

      this.currentOffset = offset
      this.currentDraggable = event.target
    }
  }

  onDrag (event) {
    event.preventDefault()
    if (this.currentDraggable) {
      const { x, y } = getMousePosition(this.svg, event)
      this.currentDraggable.setAttributeNS(null, 'x', x - this.currentOffset.x)
      this.currentDraggable.setAttributeNS(null, 'y', y - this.currentOffset.y)
    }
  }

  endDrag (event) {
    if (this.currentDraggable) {
      const newData = [...this.data]
      const currentIndex = parseInt(
        this.currentDraggable.getAttribute('data-index')
      )
      const x = parseInt(this.currentDraggable.getAttribute('x'))
      const y = parseInt(this.currentDraggable.getAttribute('y'))

      newData[currentIndex] = {
        ...newData[currentIndex],
        x,
        y
      }

      this.data = newData
    }

    this.currentDraggable = undefined
    this.currentOffset = undefined
  }

  render () {
    this.innerHTML = TEMPLATE

    this.svg = this.querySelector('svg')

    this.svg.addEventListener('mousedown', this.startDrag)
    this.svg.addEventListener('mousemove', this.onDrag)
    this.svg.addEventListener('mouseup', this.endDrag)
    this.svg.addEventListener('mouseleave', this.endDrag)

    this.data
      .map((element, index) =>
        createPostIt({
          ...element,
          index,
          color: getPostItColor(index),
          attrs: DEFAULT_POST_IT_ATTRS
        })
      )
      .forEach(postIt => {
        this.svg.appendChild(postIt)
      })
  }

  connectedCallback () {
    this.render()
  }

  attributeChangedCallback () {
    window.requestAnimationFrame(this.render)
  }
}

export default Board
