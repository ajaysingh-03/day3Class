import './card.css'

export default function Card() {
  return (
    <div className="card__container">
        <div className="card__wrapper">
            <div className="left-container">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            </div>
            <div className="right-container">
                <div className="right__content">
                    <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <a href="#" className='get__btn'>Get In Touch</a>
                </div>
            </div>
        </div>

    </div>
  )
}
