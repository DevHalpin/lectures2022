# Mod7W17 Component based UI with React
- [x] Recap about what is React
- [x] Advanced JSX syntax
- [x] Data Communication
- [x] StoryBook
- [x] Demo Project

## React - Declarative UI framework
1. Developers describe **what** to show, NOT **how** to achieve it
2. React determines **when** to render, not you
3. React re-render is not synchronous when data change
4. Data ownership is a key concept in understanding React

## Advanced JSX syntax
Fragment

```jsx
// <></> will inject a container to React without adding any actual html element
export default function CarListItem() {
  return (
    <>
      <h5>Model: F-150</h5>
      <div>Make: Ford</div>
      <div>Price: $5000</div>
    </>
  )
}
```

JSX element child array

```jsx
function CarList() {
  const cars = [
    { model: 'F-150', make: 'Ford', price: 5000 },
    { model: 'Corolla', make: 'Toyota', price: 5000}
  ]

  const carDisplay = cars.map(car => {
    return (
      <div key={car.model}>
        <h5>Model: {car.model}</h5>
        <p>Make: {car.make}</p>
        <p>Price: ${car.price}</p>
      </div>
    )
  })
  return (
    <>
      {carDisplay}
    </>
  );
}
```

Props spreading from parent component

```jsx
const car = { id: 1, model: 'F-150', make: 'Ford', price: 5000 }

// Not using props spreading
<CarListItem key={car.id} model={car.model} make={car.make} price={car.price} />

// Using props spreading
<CarListItem key={car.id} {...car} />
```

4. Props destructing in child component
```jsx
// Without destructuring, you have to access property from props object
export default function CarListItem(props) {
  return (
    <div key={props.model}>
      <h5>Model: {props.model}</h5>
      <p>Make: {props.make}</p>
      <p>Price: ${props.price}</p>
    </div>
  )
}

// With destructuring, you can get direct access to the props value
export default function CarListItem({id, model, make, price}) {
  return (
    <div key={id}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
    </div>
  )
}
export default function CarListItem(props) {
  const {id, model, make, price} = props
  return (
    <div key={id}>
      <h5>Model: {model}</h5>
      <p>Make: {make}</p>
      <p>Price: ${price}</p>
    </div>
  )
}
```

5. Conditional Statement in JSX
    1. Using element variable
    2. Using inline `IF` with `&&` operator
    3. What if we want to create a `Mark As Sold` button but hide it once the item is sold?

```jsx
let button;
if (status == 'AVAILABLE'){
  button = <button onClick={() => { onStatusChange(id, 'SOLD') }}>Mark As Sold</button>
} else {
  button = <></>
}
return {button}
```

```jsx
{status === 'AVAILABLE' && <button onClick={() => { onStatusChange(id, 'SOLD') }}>Mark As Sold</button>}
```

### Component Data Communication
How does parent pass data to child?

```jsx
export default function App () {
  const cars = [
    {id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'SOLD'}
    {id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ]

  return (
    <CarList {...cars}>
  )
}
```
```jsx
export default function CarList (props) {

  const carDisplay = props.cars.map(car => {
    return (
      <CarListItem key={props.car.id} {...props.car}/>
    )
  })

  return (
    <>
    {carDisplay}
    </>
  )
}
```

How does the child modify it's parent data?
 * Cannot modify inside of the child, 'props' is immutable
 * Data should be modified in the component it belongs to
 * Define data update action in parent component
 * Pass the action as 'props' to child
 * Execute the action in child

```jsx
export default function CarsList () {
  const [cars, setCars] = [
    {id: 1, model: 'F-150', make: 'Ford', price: 5000, status: 'SOLD'}
    {id: 2, model: 'Corolla', make: 'Toyota', price: 2000, status: 'AVAILABLE'}
  ];

  const onStatusChangeHandler = (id, status) => {
    const newState = cars.map(car => {
      if (id === car.id) {
        return {...car, status}
      }
      return car;
    })
    setCars(newState)
  }

  const carDisplay = cars.map(car => {
    return (
      <CarListItem key={car.id} {...car} onStatusChange={onStatusChangeHandler} />
    )
  })
}
```

```jsx
export default function CarListItem(props) {

  <button onClick={() => props.onStatusChangeHandler(props.id, 'SOLD')}>
}
```

How does data flow between siblings?
```jsx
export default function App() {
  return (
    <CarList />
    <Profile />
  )
}
```

## Controlled Components (Controlled Input)
* Applied to 'input', 'textarea' and 'select'
* Two-way binding between form field and a state
* Allow React to control the form field

```jsx
export default function CarList() {
  const [contact, setContact] = useState('8881234567')

  return (
    <>
    <p>The contact is {contact}</p>
    <input value={contact} onInput={(e) => { setContact(e.target.value)}} />
    </>
  )
}
```

## Storybook
* Build UI component in "isolation"
* Support not only React
* Multiple syntax available
* https://storybook.js.org/

```jsx
storiesOf("CarListItem", module)
  .add("AVILABLE", () => <CarListItem {...pending} onStatusChange={action('Mark As Sold',{data: [pending.id]})}/>)
  .add("SOLD", () => <CarListItem {...sold} />)
```