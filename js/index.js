window.onload=function(){
    //购物车
    let container_right=document.getElementsByClassName('container_right')[0];
    let shoppingCart_none=document.getElementsByClassName('shoppingCart_none')[0];
    container_right.onmouseenter=function(){
        shoppingCart_none.style.height="98px";
        shoppingCart_none.style.boxShadow="0 2px 5px 3px rgba(0,0,0,0.3)"
    }
    container_right.onmouseleave=function(){
        shoppingCart_none.style.height="0";
        shoppingCart_none.style.boxShadow="none"
    }


//    侧导航
    let aside_nav=document.getElementsByClassName('aside_nav')[0];
    let lis=aside_nav.getElementsByTagName('li')
    let asideNav_none=document.getElementsByClassName('asideNav_none')
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            asideNav_none[i].style.display="block";
        }
        lis[i].onmouseleave=function(){
            asideNav_none[i].style.display="none";
        }
    }

//    家电
    function tab(homeelec){
        let more_list=homeelec.getElementsByClassName('more_list')[0];
        let lists=more_list.getElementsByTagName('li');
        let elec_list=homeelec.getElementsByClassName('elec_list');
        for(let i=0;i<lists.length;i++){
            lists[i].onmouseenter=function(){
                for(let j=0;j<lists.length;j++){
                    elec_list[j].style.zIndex='5';
                }
                elec_list[i].style.zIndex='10';
            }
        }
    }
    let homeelec0=document.getElementsByClassName('homeelec')[0];
    let homeelec1=document.getElementsByClassName('homeelec')[1];
    let homeelec2=document.getElementsByClassName('homeelec')[2];
    let homeelec3=document.getElementsByClassName('homeelec')[3];
    let homeelec4=document.getElementsByClassName('homeelec')[4];
    tab(homeelec0)
    tab(homeelec1)
    tab(homeelec2)
    tab(homeelec3)
    tab(homeelec4)


//    轮播图
    let banner_picture=document.getElementsByClassName('banner_picture')[0];
    let lists1=banner_picture.getElementsByTagName('li');
    let lunbodian=document.getElementsByClassName('lunbodian')[0];
    let lists2=lunbodian.getElementsByTagName('li');
    let btnright=document.getElementsByClassName('btnright')[0];
    let btnleft=document.getElementsByClassName('btnleft')[0];
    let num=0;
    let t=setInterval(move,1500);
    function move(){
        num++;
        if(num==lists1.length){
            num=0;
        }
        lists1[num].onmouseenter=function(){
            clearInterval(t);
        }
        lists1[num].onmouseleave=function(){
            t=setInterval(move,1500);
        }
        for(let i=0;i<lists1.length;i++){
            lists1[i].style.zIndex='5';
            lists2[i].style.background='';
        }
        // lists2[num].onclick=function(){
        //     move();
        //     clearInterval(t);
        // }
        lists1[num].style.zIndex="10";
        lists2[num].style.background='#f8efe2';
    }
    btnright.onclick=function(){
        move();

    }
    btnright.onmouseenter=function(){
        clearInterval(t);
    }
    function move1(){
        num--
        if(num<0){
            num=lists1.length-1;
        }
        lists1[num].onmouseenter=function(){
            clearInterval(t);
        }
        lists1[num].onmouseleave=function(){
            t=setInterval(move,1500);
        }
        for(let i=0;i<lists1.length;i++){
            lists1[i].style.zIndex='5';
            lists2[i].style.background='#92897c';
            lists2[i].style.borderColor='#b3ada4';
        }
        lists1[num].style.zIndex="10";
        lists2[num].style.background='#f8efe2';
        lists2[i].style.borderColor='#92897c';
    }
    btnleft.onclick=function(){
        move1();
        clearInterval(t);
    }
    btnleft.onmouseenter=function(){
        clearInterval(t);
    }
    for(let i=0;i<lists2.length;i++){
        lists2[i].onclick=function(){
            for(let j=0;j<lists2.length;j++){
                lists1[j].style.zIndex='5';
                lists2[j].style.background='';
            }
            lists1[i].style.zIndex='10';
            lists2[i].style.background='#f8efe2';
            clearInterval(t);
        }
        lists2[i].onmouseleave=function(){
            t=setInterval(move,1500);
        }
    }

//    小米闪购
    let shangou_btn=document.querySelectorAll('.big_box_flashover .flas_head .more .button')
    let list_right_js=document.querySelector('.big_box_flashover .flashover .list .list_right_js')
    let shangou_widths=parseInt(getComputedStyle(list_right_js,null).width)/2;
    console.log(list_right_js,shangou_widths)
    let shangou_times=0;
    shangou_btn[0].onclick=function(){
        shangou_times++;
        if(shangou_times==2){
            shangou_times=1;
        }
        list_right_js.style.transform="translateX("+(-shangou_widths* shangou_times)+"px)"
    }
    shangou_btn[1].onclick=function(){
        shangou_times--;
        if(shangou_times==-1){
            shangou_times=0;
        }
        list_right_js.style.transform="translateX("+(-shangou_widths* shangou_times)+"px)"
    }


//  内容部分
    function contents(list_all){
        // let list_all=document.getElementsByClassName('list_all')[0];
        let box=list_all.querySelectorAll('.content .content_list .point .each_point .box')
        let btnleftsmall=list_all.querySelector('.content .content_list .list_all .btnleft');
        let btnrightsmall=list_all.querySelector('.content .content_list .list_all .btnright');
        let widths=parseInt((getComputedStyle(list_all,null).width))
        let list_box=list_all.querySelectorAll('.content .content_list .list_all .list_every .list_box')
        console.log(list_all,list_box,btnleftsmall, btnrightsmall,box,widths)
        let now=next=0;
        let flag=true;
        let q=setInterval(smallmove,10000);
        function smallmove(){
            next++;
            if(next==list_box.length){
                next=0;
            }
            list_box[next].style.left=widths+"px";
            animate(list_box[now],{left:-widths});
            animate(list_box[next],{left:0},function(){
                flag=true;
            })
            box[now].classList.remove('box_hot')
            box[next].classList.add('box_hot')
            now=next;
        }
        function smallmove1(){
            next--;
            if(next<0){
                next=list_box.length-1;
            }
            list_box[next].style.left=-widths+'px';
            animate(list_box[now],{left:widths})
            animate(list_box[next],{left:0},function(){
                flag=true;
            })
            box[now].classList.remove('box_hot')
            box[next].classList.add('box_hot')
            now=next;
        }
        list_all.onmouseenter=function(){
            clearInterval(q)
        }
        list_all.onmouseleave=function(){
            q=setInterval(smallmove,10000);
        }
        btnrightsmall.onclick=function(){
            if(flag==false){
                return
            }
            flag=false
            smallmove()
        }
        btnleftsmall.onclick=function(){
            if(flag==false){
                return
            }
            flag=false
            smallmove1()
        }
        box.forEach(function(value,i){
            value.onclick=function(){
                if(now==i){
                    return;
                }
                else if(now<i){
                    list_box[i].style.left=widths+'px';
                    animate(list_box[now],{left:-widths})
                    animate(list_box[i],{left:0})
                    box[now].classList.remove('box_hot')
                    box[i].classList.add('box_hot')
                }
                else{
                    list_box[i].style.left=-widths+'px';
                    animate(list_box[now],{left:widths})
                    animate(list_box[i],{left:0})
                    box[now].classList.remove('box_hot')
                    box[i].classList.add('box_hot')
                }
                now=i;
            }
        })
    }

    let list_all2=document.getElementsByClassName('list_all')[1];
    contents(list_all2)

//    滚动条变化顶部出现

    let wh=innerHeight;
    let heads=document.querySelector('header')
    let left_asidenav=document.querySelector('.left_asidenav')
    let aside_lis=document.querySelectorAll('.left_asidenav li')
    let backtop=document.querySelector('.fixed .fix_bottom .backtop')
    console.log(backtop)
    let homeelecall=document.querySelectorAll('.homeelec')
    console.log(wh,aside_lis,backtop,homeelecall)
    let arr=[]
    homeelecall.forEach(function(value1){
        arr.push(value1.offsetTop)
    })
    console.log(arr);
    window.onscroll=function(){
        let bh=document.body.scrollTop||document.documentElement.scrollTop
        arr.forEach(function(v,i){
            if(wh+bh>=v+300){
                aside_lis.forEach(function(v1){
                    v1.classList.remove('js_hot')
                })
                aside_lis[i].classList.add('js_hot')
            }
        })
        if(wh+bh>2800){
            heads.style.height='80px';
        }
        else{
            heads.style.height='0';
        }
        if(wh+bh>1800){
            left_asidenav.style.width="50px"
        }
        else{
            left_asidenav.style.width="0"
        }
        backtop.onclick=function(){
            animate(document.body,{scrollTop:0},1500)
            animate( document.documentElement,{scrollTop:0},1500)
        }
    }
    aside_lis.forEach((vvv,j)=>{
        vvv.onclick=function(){
            animate(document.body,{scrollTop:arr[j]-100},500)
            animate( document.documentElement,{scrollTop:arr[j]-100},500)
        }
    })

}

// $(function(){
//     //购物车
//     $(".container_right a").mouseenter(function(){
//         $(".container_right .shoppingCart_none").css("height","98px").css("box-shadow","0 2px 5px 3px rgba(0,0,0,0.3)")
//     })
//     $(".container_right a").mouseleave(function(){
//         $(".container_right .shoppingCart_none").css("height","0").css("box-shadow","none")
//     })
// //    侧导航
//     $(".big_box .aside_nav li").mouseenter(function(){
//         $(".big_box .aside_nav li .asideNav_none").css("display","none").eq($(this).index()).css("display","block")
//     })
//     $(".big_box .aside_nav li").mouseleave(function(){
//         $(".big_box .aside_nav li .asideNav_none").css("display","none")
//     })
//     // banner
//
//     //
//     $(".homeelec",function(i,v){
//         $(".homeelec .more_list li").mouseenter(function(){
//             $(".homeelec .elec_bottom_right ul").css("z-index","5").eq($(this).index()).css("z-index","10")
//         })
//     })
//
// })




