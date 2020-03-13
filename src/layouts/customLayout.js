// import external modules
import React, { PureComponent } from "react";
import classnames from "classnames";

// import internal(own) modules
import { FoldedContentConsumer, FoldedContentProvider } from "../utility/context/toggleContentContext";
import templateConfig from "../templateConfig";

class CustomLayout extends PureComponent {
   state = {
      width: window.innerWidth,
      layout: ''
   };

   render() {
      return (
            <FoldedContentProvider>
               <FoldedContentConsumer>
                  {context => (                  
                     <div
                        className={classnames("wrapper ", {
                           "menu-collapsed": context.foldedContent || this.state.width < 991,
                           "main-layout": !context.foldedContent,
                           [`${templateConfig.layoutColor}`]: (this.state.layout === ''),
                           [`${this.state.layout}`]: (this.state.layout !== '')
                        })}
                     >                     
                        <main>{this.props.children}</main>
                     </div>
                  )}
               </FoldedContentConsumer>
            </FoldedContentProvider>
      );
   }
}

export default CustomLayout;
