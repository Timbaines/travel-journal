
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props)  {
    return (
        <div className="card">
            <img src={`${props.cardImg}`} className="card-image" alt="travel image"/>
            <div className="card-entry">
                <div className="card-subtitle">
                    <i className="card-icon"><FontAwesomeIcon icon={faLocationDot}/></i>
                    <p className="card-destination">{props.title}<a className="card-geo" href={props.googleMap} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </p>
                </div>
                <h2 className="card-location">{`${props.location}`}</h2>
                <h4 className="card-date">{`${props.date}`}</h4>
                <p className="card-description">{`${props.description}`}</p>
            </div>
        </div>
    )
}