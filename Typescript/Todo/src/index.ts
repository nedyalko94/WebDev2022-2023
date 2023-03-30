/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// command to build it
//
// npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

// comment IsolatedModule in tsconfig if you don't have a import / export
import { v4 as uuidV4 } from 'uuid';
// if the import is underline hover and check if there is  type for that package
// for uuidv4 is npm i --save-dev @types/uuid
console.log(uuidV4());

type Task = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.querySelector<HTMLInputElement>('#new-task-title');
// if is by id  you can use as  at end
// const list = document.getElementById('#list') as HTMLUListElement | null

const tasks: Task[] = loadTask();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return; // check if my input is null and return if is

  const newTask = {
    id: uuidV4(),
    title: input.value,
    complete: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  addListItem(newTask);
  input.value = '';
}); 

function addListItem(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');

  checkbox.addEventListener("change", () => {
    task.complete = checkbox.checked;
    console.log(tasks);
    saveTask();

  });
  checkbox.type = 'checkbox';
  checkbox.checked = task.complete;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
  saveTask();

  
}

function saveTask() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTask(): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if (taskJSON == null) return []

  return JSON.parse(taskJSON);
}
