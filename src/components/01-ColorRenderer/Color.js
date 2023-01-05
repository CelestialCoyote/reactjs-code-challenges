export default function Color ({ hex, name }) {
    return (
      <div
        className='color-square' style={{ backgroundColor: hex }}
      >
        <label>{name}</label>
        <label>{hex}</label>
      </div>
    )
  }
  