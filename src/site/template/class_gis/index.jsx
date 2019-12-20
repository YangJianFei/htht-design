/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Icon } from 'antd'
import DocContent from '../doc_content'
import Highlight from '../highlight'
import './style.scss'

function ClassContent(props) {
  const { codes, desc } = props
  return (
    <DocContent>
      <article>
        <section className="content-title">
          <h1>{desc.title.value}</h1>
          <Highlight className="javascript,js,jsx">{codes[0]}</Highlight>
          <p className="main-desc">{desc.title.detail}</p>
          <h2>
            模块详解
            <Icon type="appstore" />
          </h2>
        </section>
        <div className="gis-block">
          <h2 className="gis-block-title">{desc.Constructors.value}</h2>

          <Highlight className="javascript,js,jsx">{codes[1]}</Highlight>
        </div>
        <div className="gis-block">
          <h2 className="gis-block-title">{desc.PropertyOverview.value}</h2>
          <table className="api-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {desc.PropertyOverview.table.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.Name}</td>
                    <td>{value.Type}</td>
                    <td>{value.Summary}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="gis-block">
          <h2 className="gis-block-title">{desc.PropertyDetails.value}</h2>
          {desc.PropertyDetails.content.map((value, index) => {
            return (
              <div key={index}>
                <h3 className="gis-block-subtitle">{value.title}</h3>
                <p className="gis-block-detail">{value.detail}</p>
                <Highlight className="javascript,js,jsx">{codes[index + 2]}</Highlight>
              </div>
            )
          })}
        </div>
        <div className="gis-block">
          <h2 className="gis-block-title">{desc.MethodOverview.value}</h2>
          <table className="api-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Return Type</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {desc.MethodOverview.table.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.Name}</td>
                    <td>{value.ReturnType}</td>
                    <td>{value.Summary}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="gis-block">
          <h2 className="gis-block-title">{desc.MethodDetails.value}</h2>
          {desc.MethodDetails.content.map((value, index) => {
            return (
              <div key={index}>
                <h3 className="gis-block-subtitle">{value.title}</h3>
                <p className="gis-block-detail">{value.detail}</p>
                <Highlight className="javascript,js,jsx">
                  {codes[index + 2 + desc.PropertyDetails.content.length]}
                </Highlight>
              </div>
            )
          })}
        </div>
      </article>
    </DocContent>
  )
}

export default ClassContent
