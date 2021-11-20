import React, { useCallback, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,LineChart
} from "recharts";

import moment from 'moment';
import FeatherIcon from 'feather-icons-react';
const Chart = (props) => {
  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Week of ${moment(new Date(label)).format("MMM DD, YYYY")}`}</p>
          <p className="label"><b><FeatherIcon icon="git-commit" size={20} style={{ verticalAlign: "text-top", marginRight: "5px" }} />{`${payload[0]?.payload?.name} ${JSON.stringify(payload[0].value)} commits`}</b></p>
        </div>
      );
    }

    return null;
  }
  // const data1 = [
  //   { name: 'angular.js', commit: 204, date: 127680 },
  //   { name: 'angular.js', commit: 662, date: 128160 },
  //   { name: 'angular.js', commit: 109, date: 1268640 },
  //   { name: 'angular.js', commit: 115, date: 1429120 }];

  // const data2 = [
  //   { name: 'test.js', commit: 204, date: 12680 },
  //   { name: 'jhjh.js', commit: 2, date: 12630 },
  //   { name: 'vdf.js', commit: 119, date: 123600 },
  //   { name: 'trt.js', commit: 15, date: 126400 }
  // ];
    const data1 = [
      {
        "name": "angular.js",
        "commit": 5090,
        "date": 100
      },
      {
        "name": "angular.js",
        "commit": 4448,
        "date": 200
      },
      {
        "name": "angular.js",
        "commit": 2930,
        "date": 300
      },
      {
        "name": "angular.js",
        "commit": 5822,
        "date": 232
      }    ];

      const data2 = [
        {
          "name": "fluxion",
          "commit": 3210,
          "date": 343
        },
        {
          "name": "fluxion",
          "commit": 3353,
          "date": 212
        },
        {
          "name": "fluxion",
          "commit": 6322,
          "date": 111
        },
        {
          "name": "fluxion",
          "commit": 1096,
          "date": 565
        }   
      ];

  const color = ['red','green','yellow'
  ];

      return (
        <LineChart width={900} height={800}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" dataKey="commit" domain={['auto', 'auto']} />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />}/>
          <Legend />
          {[data1,data2].map((c,i)=>
            
          <Line type="monotone" data={c} dataKey="commit" stroke={`${color[i]}`} activeDot={{ r: 8 }} />
            )}
        </LineChart>
      );
 }

export default Chart;
