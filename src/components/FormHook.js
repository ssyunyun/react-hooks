import React, {useState} from 'react'

function FormHook() {
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
      <div>
       <p>firstName: - {name.firstName}</p>
       <p>lastName: - {name.lastName}</p>
      </div>
      <form>
        <input
          type='text'
          value={name.firstName}
          onChange={e => setName({...name, firstName: e.target.value})}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => setName({...name, lastName: e.target.value})}
        />
        <div>
          <p>{JSON.stringify(name)}</p>
        </div>
      </form>
    </div>
  )
}

export default FormHook

