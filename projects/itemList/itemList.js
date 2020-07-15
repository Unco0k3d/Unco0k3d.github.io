//Get item
let i = document.getElementById("itemForm");
let inp = document.getElementById("item-input");
let itemList = document.getElementById('list')
console.log(itemList)
i.addEventListener("submit", function(e) {
  e.preventDefault();
  //get value from child
  let input = e.target.children[1].value;
  console.log(input);
  //add value to list
  let li = document.createElement('li');
  li.className = 'item'
  li.appendChild(document.createTextNode(input))
  list.appendChild(li);
  // console.log(li)
  //add delete button
  let rm = document.createElement('button')
  rm.className = 'remove'
  rm.innerText = 'X'
  li.appendChild(rm);
  // clear form
  i.reset();
});

itemList.addEventListener('click',removeItem)

function removeItem(e){
  let li = e.target.parentElement;
  itemList.removeChild(li)
}
