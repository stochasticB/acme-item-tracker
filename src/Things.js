import React from 'react';
import ThingForm from './ThingForm';
import { connect } from 'react-redux';

const Things = ({ things, users, deleteThing, updateUser })=> {
  return (
    <div>
      <h1>Things:</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <div>
              <li key={ thing.id }>
                { thing.name }
                <br></br>
                User:
                <select defaultValue={thing.userId ? thing.userId: ''} onChange={(ev) => updateUser(ev, thing)}>
                  <option value={0}>Item has no owner</option>
                  {
                    users.map(user => {
                      return (
                        <option value={user.id} key={user.id}>{user.name}</option>
                      )
                    })
                  }

                </select>
                <br></br>
                <button onClick={() => {deleteThing(thing)}}>Delete Item</button>
              </li>
              <br></br>
              </div>
            );
          })
        }
      </ul>
      <ThingForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    things: state.things,
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteThing: async(thing) => {
      dispatch({
        type: 'DELETE_THING',
        thing
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Things);