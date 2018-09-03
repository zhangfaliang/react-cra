// 使用 HTML5历史记录api （pushState，replaceState和popstate） 的<router>,以使您的ui与url保持一致

/*baseurl: string;
*所有位置的基本rul。如果您的应用程序是从服务器上的子目录提供的，则需要将其设置为子目录格式正确的基本名称应该有一个前导斜杠
* getUserConfirmation:func
* 用于确认导航的功能。默认使用 window.confirm
* forceRefresh : bool
*如果为true ，路由器将在页面导航是使用完整页面刷新，您可能只想在不支持html5历史记录api的浏览器中使用它
*keyLength:num
* location.key 的长度。默认是6
*children:node
* 要呈现的单个子元素
*/

/*HashRouter 一个<Router> 它使用url的哈希部分（window。location.hash）来保持ui和url同步
*重要说明：哈希历史记录不支持location.key或location.state。在以前的版本中，我们试图填充行为，但是有一些我们无法解决的边缘情况。任何需要此行为的代码或插件都不起作用。由于此技术仅用于支持旧版浏览器，因此我们建议您将服务器配置为使用。
*baseurl: string;
*所有位置的基本rul。如果您的应用程序是从服务器上的子目录提供的，则需要将其设置为子目录格式正确的基本名称应该有一个前导斜杠

* getUserConfirmation:func
* 用于确认导航的功能。默认使用 window.confirm
*/

/*Link   提供围绕应用程序的声明性，可访问的导航。
* to 要链接的位置的字符串表示形式，通过连接位置的路径名，搜索和哈希属性创建。
*pathname：表示链接到的路径的字符串。
*search：查询参数的字符串表示形式。
*hash：放入URL的哈希，
state：State to persist to the location.。
*/

/**redirect
 * 1 渲染<重定向> 将导航到新的位置。新的位置将覆盖历史堆栈中的当前位置，如服务器从定向
 * 2 可以通过重定向到组件中的this.props.location.state访问对象。然后，可以通过路径名‘/login’指向login
 * 组件中的 this.props.location.state.referrer 访问此新引用
 * 3 push如果为true 重定向将把新条目推送到历史记录而不是代替
 * 4  from 这只能用于在内呈现是匹配位置，
 * 5 exact 完全匹配
 * 6 strict 严格匹配使用 /path/
 */

/**
 * Route
 * Route 组件可能是React Router 中重要的组件，用于理解和学习如何使用。其最基本的职责是在位置与路径路径匹配时呈现一些ui
 * 1 Route render methods   1.1 component 1.2 render 1.3 childer  每种都有自己的适用情况
 * 2  component localhost childer 都会传入三个参数  match location  history
 * 3 component  仅在位置匹配时呈现的react 组件。他将使用路径道具进行渲染
 * 4 当您使用组件（而不是下面的render或者childer）时，路由器使用React.creat.createElement
 * 从给定组件创建新的React元素。这意味着如果为组件props提供内联函数，则每次渲染都会创建新的组件。
 * 这导致现有组件卸载和新组件安装，而不是仅更新现有组件，使用内联函数进行内联渲染时 请使用render或者childer praps
 * 5 render 这允许方便的在线渲染和包装， 而没有上面解释的不期望的重新安装，
 * 你可以传入要在位置匹配时调用的函数，而不是使用组件prop
 * 6 childer  有时您需要渲染路径是否与位置匹配。这这种情况下，您可以使用child道具功能，
 * 他的工作方式与render完全 相同，只是无论是否匹配都会调用她
 * 子项呈现prop接收与组件和呈现方法相同的所有路径道具，除非路由无法匹配url，否则matach为null，
 * 这允许您根据路径是否匹配动态调整ui ，如果路线匹配，我们在这里添加一个活动类
 * ****** 这对动画很有用  都不要在同一个route中使用   （component child render）
 *  7 path  匹配的地址
 *  8 exact 如果为true ， 则仅在路径与location.pathname 完全匹配时才匹配
 *  9 strict 如果为true 则具有尾部斜杠的路径将仅匹配具有尾部斜杠的location.pathname 当location.pathname
 * 中有其他url时，这不起作用（不受限制）
 *  strict可以用于强行执行location.pathname没有尾部斜杠，但为了执行操作，strict和exact 必须为true
 * 10 location  a<route> 元素尝试将其他路径与当前历史记录的location（通常是当前浏览器的URl）进行匹配，
 * 但是 也可以传递具有不同路径名的location以进行匹配
 * 当你需要将匹配到当前历史记录位置以外的位置是，这个非常有用，如动画过渡示例中所示
 * 如果<route>元素包含在中并匹配传递给的location（或者当前历史记录位置），则传递给的位置props 将被《router》
 * 使用的那个覆盖，
 *
 * 11 当sensitive 为true的时候 路由匹配区分大小写
 *
 */

/**
   * router 所有的路由器组件的通用低级接口。通常，应用程序将使用其中一个高级路由器：
   * <BrowserRouter>
    <HashRouter>
    <MemoryRouter>
    <NativeRouter>
    <StaticRouter>
    * 1 history  用于导航的历史记录对象。
    * 2 child: node 渲染简单的element
    * 
   */

/*StaticRouter 永远不会改变的router
   *当用户实际上没有点击时，这在服务器端渲染方案中很有用，因此该位置实际上永远不会改变。因此，名称：
   静态。当您只需要插入一个位置并在渲染输出上进行断言时，它在简单测试中也很有用。
   *这是一个示例节点服务器，它为发送302状态代码，为其他请求发送常规HTML：
  import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

createServer((req, res) => {

  // This context object contains the results of the render
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(html)
    res.end()
  }
}).listen(3000)

   * 1 basename：string 所有位置的基本url 格式正确的基本名称应该有一个前导斜杠，但是没有尾部斜杠
   * 2 location： object 服务器收到的url 可能是节点服务器的req.url  {pathname，search，hash，state}
   * 3 context：object  一个普通的javascript对象 ，在渲染期间，组件可以向对象添加对象添加属性以存储有关
   * 渲染的信息 聆听翻译 当匹配时，它会将上下文对象传递给它呈现为staticContext prop的组件。查看“服务器渲染”指南，
   * 了解有关如何自行完成此操作的更多信息。
   *  渲染后，这些属性可用于配置服务器的响应。
   **/

/**
 * Switch
 * 在switch中有 
 * 如果URL是/ about，则，和null将全部呈现，因为它们都匹配路径。
 * <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
 * 这是设计使我们能够以多种方式将组合到我们的应用程序中，例如侧边栏和面包屑，引导标签等。
 */