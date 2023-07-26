import './testmonials.scss'
import { testmoninalsData } from '../../data'

export default function Testmonials() {
    return (
        <div className='testmonials' id='testmonials'>
            <h1>Testmonials</h1>
            <div className="container">
                {testmoninalsData.map(item => (
                    <div key={item.id} className={item.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className='left' src="assets/right-arrow.png" alt="" />
                            <img className='user' src={item.img} alt="" />
                            <img className='right' src={item.icon} alt="" />
                        </div>
                        <div className="center">
                            {item.desc}
                        </div>
                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
