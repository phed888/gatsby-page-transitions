import React from "react"
import PageHeader from '../components/PageHeader'
import ExpandingTopic from '../components/ExpandingTopic'

export default () => (
    <div>
        <PageHeader pageTitle={'Home'} bgColor={'#ff0000'} />
        {/* <Dropdown dropList={['Hello', 'There']}/> */}
        <ExpandingTopic 
            headline={'Hello there'} 
            content={'Tibique audiam eum ex laudem reprehendunt tota usu tale quo abhorreant choro cu semper at eum. Illum est habeo aliquid eu impetus numquam facilisis detracto inani putent conclusionemque iudico assentior. Te veritus pericula congue regione per eum consulatu dolor appellantur aperiri sed repudiare intellegebat id.'}
        />
        <ExpandingTopic 
            headline={'Hello there'} 
            content={'Tibique audiam eum ex laudem reprehendunt tota usu tale quo abhorreant choro cu semper at eum. Illum est habeo aliquid eu impetus numquam facilisis detracto inani putent conclusionemque iudico assentior. Te veritus pericula congue regione per eum consulatu dolor appellantur aperiri sed repudiare intellegebat id.'}
        />
        <ExpandingTopic 
            headline={'Hello there'} 
            content={'Tibique audiam eum ex laudem reprehendunt tota usu tale quo abhorreant choro cu semper at eum. Illum est habeo aliquid eu impetus numquam facilisis detracto inani putent conclusionemque iudico assentior. Te veritus pericula congue regione per eum consulatu dolor appellantur aperiri sed repudiare intellegebat id.'}
        />
    </div>
)
