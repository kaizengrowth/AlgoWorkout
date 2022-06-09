import '../scss/_modal.scss';
 
const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className = {showHideClassName}>
            <section classname = 'modal-main'>
                {children}
                <img src="https://m.media-amazon.com/images/I/51rGqE0iQ5L._AC_SX679_.jpg" style="width: 300px"/>
                <button type='button' onClick={handleClose}>
                    Complete!
                </button>
            </section>
        </div>
    );
};

 export default SessionContainer;
 