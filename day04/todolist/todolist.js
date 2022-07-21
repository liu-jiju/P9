//获取元素
var txt = document.querySelector('.txt')
var btn = document.querySelector('.btn')
var ul = document.querySelector('ul')
var js = document.querySelector('.js')
var All = document.querySelector('.All')
var Active = document.querySelector('.Active')
var Completed = document.querySelector('.Completed')
var ClearCompleted = document.querySelector('.ClearCompleted')
var btns = document.querySelectorAll('.pp');

// 选中数组长度
var check_val = []
// console.log(check_val.length!=0);
function checkLength() {
    var fx = document.querySelectorAll('.fx')
    check_val = []
    fx.forEach(item => {
        if (item.checked == true) {
            check_val.push(item)
            // console.log(check_val.length);
        }
    });
    return check_val.length
}

//自动获取焦点
txt.focus()
//判断输入框内容为空时  不能添加，提示
txt.onkeyup = function (e) {
    //按下enter键
    if (e.keyCode == 13) {
        //去掉空格，不能为空提示
        if (txt.value.trim() == "") {
            alert('内容不能为空')
        } else {
            //输入框内容添加成功,创建标签
            var li = document.createElement('li');
            li.innerHTML = `
            <input type="checkbox" class="fx">
            <p>${txt.value}</p>
            <a href="JavaScript:;" class='del'>X</a>
            `
            //写入内容
            ul.appendChild(li)
            //计数
            js.innerHTML = ul.children.length
            //清空输入框的值
            txt.value = ''
            checkLength()
            xr()
        }
    }
}


//点击按钮添加
btn.onclick = function () {
    //去掉空格，不能为空提示
    if (txt.value.trim() == "") {
        alert('内容不能为空')
    } else {
        //输入框内容添加成功,创建标签
        var li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="fx">
        <p>${txt.value}</p>
        <a class='del' href="JavaScript:;">X</a>
        `
        //写入内容
        ul.appendChild(li)
        //计数
        js.innerHTML = ul.children.length
        //清空输入框的值
        txt.value = ''
        checkLength()
        xr()
    }

}

//删除事件委托
ul.addEventListener('click', function (e) {
    if (e.target.className == 'del') {
        //删除
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)


        //计数
        js.innerHTML = ul.children.length

    }
    checkLength()
    xr()
})
//选中翻转
ul.addEventListener('click', function (e) {
    if (e.target.className == 'fx') {
        if (e.target.checked == true) {
            e.target.style.transform = 'rotateX(180deg)'
            e.target.nextElementSibling.style.transform = 'rotateX(180deg)'
            e.target.parentNode.className = 'rotate'
            checkLength()
        } else {
            e.target.parentNode.className = ''
            e.target.style.transform = 'rotateX(360deg)'
            e.target.nextElementSibling.style.transform = 'rotateX(360deg)'
            checkLength()
            
        }
        xr()
    }
})
// 底部选中显示隐藏
function xr() {
    var Ns = document.querySelectorAll('.fx'); //通过标签获取到一组按钮
    // console.log(e.target.checked);
    for (var i = 0; i < Ns.length; i++) {
        if (Ns[i].checked == true) {
            ClearCompleted.style.display = "inline-block"
            if (ul.children.length > check_val.length && check_val.length != 0) {
                Completed.style.display = "inline-block"
                Active.style.display = "inline-block"
            }
            return
        } else {
            ClearCompleted.style.display = "none"
            Completed.style.display = "none"
            Active.style.display = "none"
        }
        // console.log(Ns[i]);
    }
}




//一组里找每一个  for遍历
for (var i = 0; i < btns.length; i++) {
	//添加点击事件
	btns[i].onclick = function () {
        var fx = document.querySelectorAll('.fx')
		//干掉所有人 --->找所有人  for遍历
		for (var j = 0; j < btns.length; j++) {
			btns[j].style.backgroundColor = ''
			btns[j].style.color = 'black'
		}
		//留下我自己
		this.style.backgroundColor = '#fe7345'
		this.style.color = '#ffffff'

        switch (this.id) {
            //全部
            case 'All':
                for (var n = 0; n < fx.length; n++) {
                    fx[n].parentNode.style.display = 'flex'
                }
                break;
            //未选中
            case 'Active':
                for (var n = 0; n < fx.length; n++) {
                    if (fx[n].checked == true) {
                        fx[n].parentNode.style.display = 'none'
                    } else {
                        fx[n].parentNode.style.display = 'flex'
                    }
                }
                break;
            //已选中
            case 'Completed':
                for (var n = 0; n < fx.length; n++) {
                    if (fx[n].checked == false) {
                        fx[n].parentNode.style.display = 'none'
                    } else {
                        fx[n].parentNode.style.display = 'flex'
                    }
                }
                break;
            case 'ClearCompleted':
                ClearCompleted.style.backgroundColor=''
                ClearCompleted.style.color='black'
                for (var n = 0; n < fx.length; n++) {
                    if (fx[n].checked == true) {
                        ul.removeChild(fx[n].parentNode)
                    }else{
                        fx[n].parentNode.style.display = 'flex'
                    }
                }
                // 控制底部显示隐藏
                xr()
                // 选中数组长度
                checkLength()
                //计数
                js.innerHTML = ul.children.length - check_val.length
                All.style.backgroundColor='#fe7345'
                All.style.color='#ffffff'
                break;
            
        }
	}

}


