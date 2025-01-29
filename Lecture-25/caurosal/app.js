

let arr = [
    'https://images.unsplash.com/photo-1735767975829-71496633d499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1737311208394-57fc870cfd94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1738081359154-44d50176b2d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1656489782764-443559c29211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D'
]

// selection

let imgEl = document.querySelector('img');

let i = 0;

let idd = setInterval(function(){
    imgEl.setAttribute('src', arr[i]);
    i = (i+1) % arr.length;
} , 2000)

// after 30s -> setTIMEOUT

setTimeout(function(){
    clearInterval(idd)
} , 20000)







