
const ctx = document.getElementById("myChart");

const data = {
  // labels: [
  //   "aakash",
  //   "harshal",
  //   "yoyo",
  //   "aakash",
  //   "harshal",
  //   "yoyo",
  //   "asdads",
  //   "asdads",
  // ],
  datasets: [
    {
      backgroundColor: [
        
        "#2A966Fcc",
        "#2590F2cc",
        "#F84F39cc",
        "#2590F2cc",
        "#F84F39cc",
        "#A8DE45cc",
        "#6B66DAcc",
        "#2A966Fcc",
      ],
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      hoverOffset: 45,
      borderWidth: [5,5,5,5,5,5,5,5],
      rotation:135,
      key: ["Precision Meds","IoT","Gamification","Automation","Digital Rights","Decentralization","Cryptography",7],
      clip : false
    },
    {
      backgroundColor: [
        "#2A966Fcc",
        "#6B66DAcc",
        "#F84F39cc",
        "#A8DE45cc",
        "#6B66DAcc",
        "#2590F2cc",
        "#F84F39cc",
        "#2590F2cc",
      ],
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      hoverOffset: -25,
      borderWidth: [5,5,5,5,5,5,5,5],
      key: ["AI/ML Diagnosis","Rapid Delivery","Adaptive Learning","NeoBanking","Blockchain",5,6,7],
      clip: false
    },
  ],
};
const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.style.display = "flex";
    listContainer.style.flexDirection = "row";
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.alignItems = "center";
      li.style.cursor = "pointer";
      li.style.display = "flex";
      li.style.flexDirection = "row";
      li.style.marginLeft = "10px";

      li.onclick = () => {
        const { type } = chart.config;
        if (type === "pie" || type === "doughnut") {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(
            item.datasetIndex,
            !chart.isDatasetVisible(item.datasetIndex)
          );
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement("span");
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + "px";
      boxSpan.style.display = "inline-block";
      boxSpan.style.height = "20px";
      boxSpan.style.marginRight = "10px";
      boxSpan.style.width = "20px";

      // Text
      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? "bold" : "";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};

// let val= [false,false,true,false,false];
let show = 2;
const customDatalabels={
  id:'customDatalabels',
  afterDatasetsDraw(chart,args,options){//pluginOptions
    const {ctx,data,chartArea:{top,bottom,left,right,width,height}}=chart;
    console.log(width)
  //   ctx.save();
  //   data.datasets[0].key.forEach((datapoint,index)=>{
  //     const {x,y}=chart.getDatasetMeta(0).data[index].tooltipPosition();
  //     ctx.font = 'bold 16px sans-serif';
  //     ctx.fillStyle="white";
  //     if(index== show || index ==show+2){
  //       ctx.fillText(datapoint,x,y);
  //     }
  //   });
  //   data.datasets[1].key.forEach((datapoint,index)=>{
  //     const {x,y}=chart.getDatasetMeta(1).data[index].tooltipPosition();
  //     ctx.font = 'bold 16px sans-serif';
  //     ctx.fillStyle="white";
  //     console.log(show);
  //     if(index==show){
  //       ctx.fillText(datapoint,x,y);
  //     }
  //   })

    // console.log(chart.data.datasets)
    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const { x, y } = datapoint.tooltipPosition();
        const halfHeight = height / 2;
        const halfwidth = width / 2;
        const xLine = x >= halfwidth ? right - 180 : left + 30;
        const yLine = y >= halfHeight ? bottom - 30 : top + 30;
        const xLine2 = x >= halfwidth ? 40 : -35;        
        const textWidth = ctx.measureText(dataset.key[index]).width;
        const textHeight = ctx.measureText(dataset.key[index]).height;
        
        if((i == 0 && (index == show || index ==show+2)) || (i == 1 && index == show)){
        // line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xLine, yLine);
        ctx.lineTo(xLine + xLine2, yLine);
        ctx.fillStyle= dataset.backgroundColor[index];
        // ctx.fill();
        ctx.strokeStyle = dataset.backgroundColor[index];
        ctx.borderWidth = '10px';
        ctx.stroke();

        //text
        // console.log(textWidth)
        // console.log(dataset.key[index])
        ctx.font = `${height*0.045}px sans-serif`;

        // control the position
        ctx.fillRect( (xLine + xLine2)-10, yLine-15, (textWidth + 20) , (28));
        ctx.textBaseline = 'middle';        
        ctx.fillStyle = "white";
        ctx.fillText(dataset.key[index], xLine + xLine2, yLine);
      }
      })
    }) 
  } 
}


var myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    cutout: "35%",
    events: [""],
    plugins: {
      tooltip: {
        enabled: false,
      },
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: "legend-container",
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
    interaction: {
      mode: "index",
    },
    animation : false,
    // clip : false,
    // responsive : true,
    maintainAspectRatio: false,
  },
  plugins: [htmlLegendPlugin,customDatalabels],
});

let titles = document.getElementsByClassName("theme_text");
const myChart1 = document.querySelector("#myChart");

clickhandler("#F84F39cccc",2)

function clickhandler(color, idx) {
  show=idx;
  console.log(show);
  for (let i = 0; i < titles.length; i++) {
    if (i==idx) {
      titles[i].classList.add("theme_active_text");
    } else {
      titles[i].classList.remove("theme_active_text");
    }
  }
  myChart1.style.backgroundImage = `url("./svg/${idx}.png")`;
  for (let i = 0; i < 8; i++) {
    if (i == idx) {
      myChart.data.datasets[0].backgroundColor[idx] = color.slice(0,color.length-2);
      myChart.data.datasets[1].backgroundColor[idx] = color.slice(0,color.length-2);
      myChart.data.datasets[0].backgroundColor[idx+2] = color.slice(0,color.length-2);
      myChart.data.datasets[0].borderWidth[idx] = 0;
      myChart.data.datasets[1].borderWidth[idx] = 0;
      myChart.data.datasets[0].borderWidth[idx+2] = 0;
      myChart.update();
    }
  }
}


function leave(color,idx){
  show=2;
  myChart1.style.backgroundImage = `url("./svg/2.png")`;
  for (let i = 0; i < titles.length; i++) {
    if (i==2) {
      titles[i].classList.add("theme_active_text");
    } else {
      titles[i].classList.remove("theme_active_text");
    }
  }
  for (let i = 0; i < 8; i++) {
    if (i == idx) {
      myChart.data.datasets[0].backgroundColor[idx] = color;
      myChart.data.datasets[0].backgroundColor[idx+2] = color;
      myChart.data.datasets[1].backgroundColor[idx] = color;
      myChart.data.datasets[0].borderWidth[idx] = 5;
      myChart.data.datasets[1].borderWidth[idx] = 5;
      myChart.data.datasets[0].borderWidth[idx+2] = 5;
      if( idx == 0){
        myChart.data.datasets[0].backgroundColor[2] = '#F84F39cc';
      }
      myChart.update();
    }
  }
}
