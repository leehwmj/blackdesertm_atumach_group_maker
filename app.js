var att_list = [430,
                380,
                330,
                390,
                400, 
                370,
                300,
                350,
                360,
                330,
                355,
                358,
                338,
                435,
                470
];

//내림차순 정렬
var sorted_att_list = att_list.sort(function(a,b){ return b-a; });



// group_blank[0] = new Array(3)

// console.log(group_blank)


if(att_list.length <= 2){
    console.log("조 없음");
}else if(att_list.length >=3 && att_list.length <= 5){
    console.log("1개조");
    const group_count = 1;
    let group_blank = new Array(group_count);
    group_blank[0] = att_list;
    console.log(group_blank);

}else if(att_list.length >= 6 && att_list.length <= 11){
    console.log("2개조");
    const group_count = 2
    let group_blank = new Array(group_count);
    group_blank[0] = [], group_blank[1] = []
    for(var i in att_list){
        if( i%2 == 0 ){
            group_blank[0].push(att_list[i])
        } else {
            group_blank[1].push(att_list[i])
        };
    };
    // console.log(group1)
    console.log(group_blank)

}else if(att_list.length >= 12 && att_list.length <= 15){
    console.log("3개조");
    const group_count = 3
    let group_blank = new Array(group_count);
    group_blank[0] = [], group_blank[1] = [], group_blank[2] = []
    for(var i in att_list){
        if( i%3 == 0 ){
            // group1
            group_blank[0].push(att_list[i])
        } else if(i%3 == 1){
            group_blank[1].push(att_list[i])
        }else{
            group_blank[2].push(att_list[i])
        };
    };
    console.log(group_blank)
}

