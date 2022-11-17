import Typing from 'react-typing-animation';
import classes from './Welcome.module.css'


 
const Welcome = () => {
    
   
    return(
        <div className={classes.welcome}>
          <Typing loop={true}>
            <h1>
             <span>W</span>
             <span>e</span>
             <span>l</span>
             <span>c</span>
             <span>o</span>
             <span>m</span>
             <span>e</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={8}/>
             <span>B</span>
             <span>i</span>
             <span>e</span>
             <span>n</span>
             <span>v</span>
             <span>e</span>
             <span>n</span>
             <span>u</span>
             <span>e</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={10}/>
             <span>B</span>
             <span>i</span>
             <span>e</span>
             <span>n</span>
             <span>v</span>
             <span>e</span>
             <span>n</span>
             <span>i</span>
             <span>d</span>
             <span>a</span>
             <span>s</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={12}/>
             <span>W</span>
             <span>i</span>
             <span>l</span>
             <span>l</span>
             <span>k</span>
             <span>o</span>
             <span>m</span>
             <span>m</span>
             <span>e</span>
             <span>n</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={11}/>
             <span>Y</span>
             <span>ō</span>
             <span>k</span>
             <span>o</span>
             <span>s</span>
             <span>o</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={7}/>
             <span>'</span>
             <span>A</span>
             <span>h</span>
             <span>l</span>
             <span>a</span>
             <span>n</span>
             <span> </span>
             <span>B</span>
             <span>i</span>
             <span>k</span>
             <Typing.Delay ms={2000} />
             <Typing.Backspace count={11}/>
            </h1>
          </Typing>
          <div className={classes.contain_paragraph}>
              <p>Hey there stranger, my name's Trust and i'm a software devloper. Hope you enjoy your stay.</p>
          </div>
          </div>
    )
}

export default Welcome;