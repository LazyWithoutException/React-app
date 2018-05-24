create-react-app
dodaj BookList komponentu koja renderuje this.props.books
zatim dodaj book reducer i root reducer (book reducer da samo vraca niz knjiga za sad)
combineReducers({})
instaliraj react-redux
napravi mapStateToProps
objasni kontejner
povezi export default connect(mapStateToProps)(BookList)
ubaci kontejer u app
u index.js ubaci createStore(rootReducer) i <Provider store={store}><App>... 
time se povezuje store i aplikacija tj redux i react
dodaj action creator fju selectBook sa console.log zasad
u booklist dodaj taj action creator, bindActioncreators
dodaj mapDispatchToProps koji vraca bindActionCreators({selectBook: selectBook}, dispatch)
dodaj active-book reducer
dodaj book-detail kontejner i ubaci je u app jsx
book reducer prepravi da ima state, action parametre i inicijalno stanje