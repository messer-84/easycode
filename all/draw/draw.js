const data = [
    {
    title: "Одежда",
    left: 1,
    right: 22
  },
  {
    title: "Мужская",
    left: 2,
    right: 9
  },
  {
    title: "Женская",
    left: 10,
    right: 21
  },
  {
    title: "Костюмы",
    left: 3,
    right: 8
  },
  {
    title: "Платья",
    left: 11,
    right: 16
  },
  {
    title: "Юбки",
    left: 17,
    right: 18
  },
  {
    title: "Блузы",
    left: 19,
    right: 20
  },
  {
    title: "Брюки",
    left: 4,
    right: 5
  },
  {
    title: "Жакеты",
    left: 6,
    right: 7
  },
  {
    title: "Вечерние",
    left: 12,
    right: 13
  },
  {
    title: "Летние",
    left: 14,
    right: 15
  }
];

var div = document.querySelector('.root');


function drawNestedSetsTree(data, node) {
  const ul = document.createElement('ul');
  data = data.sort((first, second) => {
    if (first.left > second.left) return 1;
    if (first.left < second.left) return -1;
  });

  let counts = data.length;
  console.log('counts',counts);
  for (let i = 0; i < counts; i++ ) {
    let item = data[i];
    console.log('item', item.title);
    let li = document.createElement('li');
    li.textContent = item.title;
    if ((item.right - item.left) == 1) {
      ul.appendChild(li);
    } else {
      data.splice(0, 1);
      let children = data.filter(x => x.left < item.right);
      data.splice(0, children.length);
      counts = counts - (children.length + 1);
      console.log('i', i);
      if (children.length > 0) {
        child = drawNestedSetsTree(children, li);
      }
      ul.appendChild(child);
    }
  }
  node.appendChild(ul);
  return node;
}

drawNestedSetsTree(data, div);
