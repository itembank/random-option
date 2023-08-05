import { useEffect, useState } from 'react';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

function App() {

  const data = [
                {
                    "title": "This is a 3-option item*",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "ans": "a"
                },
                {
                    "title": "This is a 2-option item.",
                    "a": "True",
                    "b": "False",
                    "ans": "a"
                },
                {
                    "title": "This is a 3-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 4-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 5-option item.",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "option 4.",
                    "e": "all of the above.",
                    "ans": "a"
                },
                {
                    "title": "This is a 4-option item*",
                    "a": "option 1.",
                    "b": "option 2.",
                    "c": "option 3.",
                    "d": "option 4.",
                    "ans": "a"
                }
  		]

  const [item, setItem] = useState<any>([]);
  const [swap, setSwap] = useState(0);

  const swapOption = async() => {
    try {
    setItem(data[5])

      if (item.c&&(item.c=="all of the above.")) {
        setSwap(Math.floor(Math.random()*2));
      } else if (item.d&&(item.d!=="all of the above.")) {
        setSwap(Math.floor(Math.random()*(7-4+1)+4));
      } else if (item.e&&(item.e!=="all of the above.")) {
        setSwap(Math.floor(Math.random()*7));
      } else {
        setSwap(Math.floor(Math.random()*4));
      }

    } catch (err) {
    console.log(err);
    }
  };

  useEffect(() => {
    swapOption();
  }, []);

  const initialValues = {
    choice: "",
  };
  
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
        <button onClick={swapOption}>Randomize</button>

        <div onChange={handleInputChange}>
	 <ul>
            <li>{item.title&&item.title}</li>

            {item.b&&!item.c&&<>
	            {item.a&&<A item={item} values={values}/>}
	            {item.b&&<B item={item} values={values}/>}
            </>}

            {(item.c=="all of the above."||item.d=="all of the above.")&&<>
	            {item.a&&((swap==1||(item.e&&swap==4))?<B item={item} values={values}/>:
			      (((item.d&&swap==2)||(item.e&&swap==5))?<C item={item} values={values}/>:
			       ((item.e&&swap==6)?<D item={item} values={values}/>:<A item={item} values={values}/>)))}
	            {item.b&&((swap==1||(item.e&&swap==4))?<A item={item} values={values}/>:
			      ((item.e&&swap==5)?<D item={item} values={values}/>:
			       (((item.e&&swap==6)||(item.d&&swap==3))?<C item={item} values={values}/>:<B item={item} values={values}/>)))}
	            {item.c&&(((item.d&&swap==2)||(item.e&&swap==5))?<A item={item} values={values}/>:
			      ((item.e&&swap==4)?<D item={item} values={values}/>:
			       (((item.e&&swap==6)||(item.d&&swap==3))?<B item={item} values={values}/>:<C item={item} values={values}/>)))}
	            {item.d&&((item.e&&swap==4)?<C item={item} values={values}/>:
			      ((item.e&&swap==5)?<B item={item} values={values}/>:
			       ((item.e&&swap==6)?<A item={item} values={values}/>:<D item={item} values={values}/>)))}
	            {item.e&&<E item={item} values={values}/>}
            </>}

            {item.c&&(!item.d)&&(item.c!=="all of the above.")&&<>
	            {item.a&&(swap==1?<B item={item} values={values}/>:
			      (swap==2?<C item={item} values={values}/>:<A item={item} values={values}/>))}
	            {item.b&&(swap==1?<A item={item} values={values}/>:
			      (swap==3?<C item={item} values={values}/>:<B item={item} values={values}/>))}
	            {item.c&&(swap==2?<A item={item} values={values}/>:
			      (swap==3?<B item={item} values={values}/>:<C item={item} values={values}/>))}
            </>}

            {item.d&&(item.d!=="all of the above.")&&<>
	            {item.a&&(swap==4?<B item={item} values={values}/>:
			      (swap==5?<C item={item} values={values}/>:
			       (swap==6?<D item={item} values={values}/>:<A item={item} values={values}/>)))}
	            {item.b&&(swap==4?<A item={item} values={values}/>:
			      (swap==5?<D item={item} values={values}/>:
			       (swap==6?<C item={item} values={values}/>:<B item={item} values={values}/>)))}
	            {item.c&&(swap==4?<D item={item} values={values}/>:
			      (swap==5?<A item={item} values={values}/>:
			       (swap==6?<B item={item} values={values}/>:<C item={item} values={values}/>)))}
	            {item.d&&(swap==4?<C item={item} values={values}/>:
			      (swap==5?<B item={item} values={values}/>:
			       (swap==6?<A item={item} values={values}/>:<D item={item} values={values}/>)))}
	            {item.e&&<E item={item} values={values}/>}
            </>}

	 </ul>
	</div>

    </>
  )
}

export default App;
