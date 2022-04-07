# Timo
react数据管理工具
# 使用方法
、
  import Timo from "all-view";
  
  const TimoProvider = Timo.createTimo(store.data, store.redurce);
  
  function App() {
    return (
      <div className="App">
        <TimoProvider>
          <Router history={history}>
            <BaseAdmin>
              <Suspense fallback={<div>Loading...12312312313</div>}>
                <Routes>
                  <Route path="/a" element={<Test />} />
                  <Route path="/info" element={<Info />} />
                  <Route path="*" element={<div>404</div>} />
                </Routes>
              </Suspense>
            </BaseAdmin>
          </Router>
        </TimoProvider>
      </div>
    );
  }

export default App;
、
