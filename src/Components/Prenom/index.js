import './index.css'

const Prenom = (props) => {
    return(
        <div className='styleFirstName'>
            Prénom : {props.propsFirstname}
        </div>
    )
}

export default Prenom