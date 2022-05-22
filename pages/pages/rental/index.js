import {useEffect,useRef} from "react"

export default function Rental() {

 
const myRef = useRef();

useEffect(() => {
 
}, []);

    //Add 3dplanner here!
    return (
      <main className='main about'>
        <div
          style={{
            width: '100%',
            height: '75vh',
            overflowY: 'scroll',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          tabindex='0'
          ref={myRef}
          onMouseEnter={(e) => {
            e.currentTarget.focus();

            e.currentTarget.style.border = 'none';
            e.currentTarget.style.outline = 'none';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
        >
          <div
            style={{
              width: '100%',
              height: '200%',
            }}
          >
            <iframe
              scrolling='yes'
              onMouseEnter={(e) => {
                e.currentTarget.focus();

                e.currentTarget.style.border = 'none';
                e.currentTarget.style.outline = 'none';
              
              }}
              src='https://simis-3dplanner.vercel.app'
              style={{
                width: '100%',
                height: '100%',
                zIndex: -1000,
              }}
            />
          </div>
        </div>
      </main>
    );
}