"use-strict"
{
  document.getElementById(`add`).addEventListener(`click`, () => {
    const tableList = document.createElement(`tr`)
    document.querySelector(`table`).appendChild(tableList);
    tableList.classList.add(`total`);

    const newId = document.createElement(`td`);
    newId.textContent = document.getElementsByClassName(`total`).length - 1;
    tableList.appendChild(newId);

    const newTask = document.createElement(`td`);
    newTask.textContent = document.getElementById(`addText`).value;
    tableList.appendChild(newTask);

    const newStatus = document.createElement(`td`);
    tableList.appendChild(newStatus);

    const taskDel = document.createElement(`td`);
    tableList.appendChild(taskDel);

    const workBtn = document.createElement(`input`)
    workBtn.value = "作業中";
    workBtn.type = `button`;
    workBtn.classList.add(`btn`);
    newStatus.appendChild(workBtn);

    const delBtn = document.createElement(`input`);
    delBtn.value = `削除`;
    delBtn.type = `button`;
    delBtn.classList.add(`btn`);
    newStatus.appendChild(delBtn);

    addText.value = "";
  });
}



