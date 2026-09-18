// Illustrative calendar, not personal health data. All marketing copy lives in HTML.
const grid=document.getElementById('calendar-grid');
if(grid){for(let i=0;i<35;i++){const day=i;const cell=document.createElement('span');cell.className='date';cell.textContent=day===0?'31':day>30?String(day-30):String(day);if(day===0||day>30)cell.classList.add('outside');if(day>=1&&day<=5)cell.classList.add('pink');if(day>=8&&day<=12)cell.classList.add('blue');if(day>=16&&day<=20)cell.classList.add('purple');if(day>=27&&day<=30)cell.classList.add('pink','predicted');grid.appendChild(cell);}}
