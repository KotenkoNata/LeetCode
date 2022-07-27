// Task - https://www.codewars.com/kata/531489f2bb244a5b9f00077e/train/javascript

function undoRedo(object) {
  let lastActions = [];
  let undoneActions = [];
  return {
    set: function (key, value) {
      if (object.hasOwnProperty(key)) {
        lastActions.push(["edit", key, object[key], value]);
      } else {
        lastActions.push(['set', key, value])
      }
      object[key] = value;
      undoneActions = [];
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      if (object[key]) {
        lastActions.push(["del", key, object[key]]);
        delete object[key];
        undoneActions = [];
      }
    },
    undo: function () {
      if (lastActions.length === 0) {
        throw new Error("There is no operation to undo");
      }
      const action = lastActions.pop();

      if (action[0] === 'set') {
        delete object[action[1]]
      } else if (action[0] === 'edit') {
        object[action[1]] = action[2];
      } else if (action[0] === 'del') {
        object[action[1]] = action[2]
      }
      undoneActions.push(action);
    },
    redo: function () {
      if (undoneActions.length === 0) {
        throw new Error("There is no operation to redo");
      }
      const action = undoneActions.pop();

      if (action[0] === 'set') {
        object[action[1]] = action[2];
      } else if (action[0] === 'edit') {
        object[action[1]] = action[3];
      } else if (action[0] === 'del') {
        delete object[action[1]]
      }

      lastActions.push(action);
    }
  }
}


