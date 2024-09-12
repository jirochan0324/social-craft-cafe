const navlist=document.getElementById('work-nav');
const links=navlist.querySelectorAll('.nav-link');
links[0].classList.add('active');

document.querySelectorAll('.work-nav-link').forEach((linkDefault)=>{
    linkDefault.addEventListener('click',()=>{
        event.preventDefault();
    })
});

links.forEach(link => {
    link.addEventListener('click', function() {
    links.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    });
});

console.log(links);

const works=document.getElementById('work-introduction-body');
const introductionLists = document.querySelectorAll('.work-introduction-list');

links.forEach((link, index) => {
    link.addEventListener('click', function() {
      // すべての.work-introduction-listを非表示にする
      introductionLists.forEach(list => list.style.opacity = '0');
      
      // クリックしたli要素のインデックスに対応する.work-introduction-listを表示する
      introductionLists[index].style.opacity = '1';
    });
  });
  
  // 初期状態で最初の.work-introduction-listを表示
  introductionLists.forEach((list, index) => {
    list.style.opacity = index === 0 ? '1' : '0';
});