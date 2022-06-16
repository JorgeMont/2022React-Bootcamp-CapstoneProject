import SliderButtonStyled from "./SliderButtonStyled";

const SliderButton = ({ icon }) => {
    return (
        <SliderButtonStyled>
            <div className="ControlButton" onClick={() => { console.log('click en izquierda'); }}>
                <i className={icon} />
            </div>
        </SliderButtonStyled>
    )
}

export default SliderButton;