"use-strict"
{
  const todos = [];

  document.getElementById(`add`).addEventListener(`click`, () => {
    const todo = {
      task: document.getElementById(`add-text`).value,
      status: `作業中`,
    }
    todos.push(todo);

    const lists = document.querySelectorAll(`tr`)
    lists.forEach(function (list, i) {
      if (i > 0) {
        list.remove();
      }
    });


    for (let i = 0; i < todos.length; i++) {
      const tr = document.createElement(`tr`);
      document.querySelector(`table`).appendChild(tr);

      const id = document.createElement(`td`);
      id.textContent = i;
      tr.appendChild(id);

      const coment = document.createElement(`td`);
      coment.textContent = todos[i].task;
      tr.appendChild(coment);

      const workBtn = document.createElement(`input`)
      workBtn.value = todos[i].status;
      workBtn.type = `button`;
      workBtn.classList.add(`btn`);
      tr.appendChild(workBtn);

      const delBtn = document.createElement(`input`);
      delBtn.value = `削除`;
      delBtn.type = `button`;
      delBtn.classList.add(`btn`);
      tr.appendChild(delBtn);
    }
    document.getElementById(`add-text`).value = ""
  });
}







