import React from 'react';
import '../css/EditPanelTodu.css'

const EditPanelTodu= (props) => {
    const { cancle , text, change, accept} = props;
    return (
      <div className='editPanel'>
          <input type="text" className='editInput' value={text} onChange={change} />

        <button className='acceptEdit editbutton' onClick={accept}>Accept</button>
        <button className='cancleEdit editbutton' onClick={cancle}>Cancel</button>
      </div>  
    );
};

export default EditPanelTodu;