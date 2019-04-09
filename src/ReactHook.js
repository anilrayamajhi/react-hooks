import React, { useState, useContext, useEffect } from 'react';
// import { ThemeContext, LocaleContext } from './context';


export const ReactHook = (props) => {
    // const [ name, setName ] = useState('GI');
    const name = useFormInput('GI');
    const surname = useFormInput('Bdr');
    const width = useWindowWidth();
    useDocumentTitle(name.value);

    // function handleChange(e){
    //   setName(e.target.value);
    // }

    return(
      <div>
        <h3>{width}</h3>
        <br />
        <input
          className="form-control"
          {...name}
        />
        <br />
        <input
          className="form-control"
          {...surname}
        />
      </div>
    )
}

function useFormInput(initialValue){
  const [ value, setValue ] = useState(initialValue);
  function handleChange(e){
    setValue(e.target.value);
  }
  return { value, onChange: handleChange };
}

function useDocumentTitle(title){
  useEffect(() => {
    document.title = title?title:'GI';
  });
}

// custom hook:: by convention hooks start with use
function useWindowWidth() {
  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });
  return width;
}
