export type Point = { x: number; y: number }

export type WhiteboardTool =
  | 'pen'
  | 'highlighter'
  | 'eraser'
  | 'text'
  | 'line'
  | 'arrow'
  | 'rect'
  | 'circle'
  | 'laser'
  | 'select'

export type BackgroundType = 'plain' | 'grid' | 'lines' | 'dots'

// 'board' = full whiteboard overlay, 'annotate' = write directly on the page
export type WhiteboardMode = 'board' | 'annotate'

export type StrokeStyle = {
  color: string
  width: number
  opacity: number
}

export type BaseElement = {
  id: string
  selected?: boolean
}

export type PathElement = BaseElement & {
  type: 'path'
  points: Point[]
  style: StrokeStyle
  isHighlighter?: boolean
}

export type ShapeType = 'line' | 'arrow' | 'rect' | 'circle'

export type ShapeElement = BaseElement & {
  type: 'shape'
  shapeType: ShapeType
  x: number
  y: number
  w: number
  h: number
  style: StrokeStyle
}

export type TextElement = BaseElement & {
  type: 'text'
  text: string
  x: number
  y: number
  fontSize: number
  color: string
  fontFamily: string
  isBold?: boolean
}

export type WhiteboardElement = PathElement | ShapeElement | TextElement

export type BoardData = {
  id: string
  name: string
  sectionId?: string // Link board to a specific lesson section
  elements: WhiteboardElement[]
  background: BackgroundType
  createdAt: number
  updatedAt: number
}
