(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const ComponenteTeste = () => {
      return /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("h1", null, "Hello Admin"));
    };

    function Colaboradores() {
      let colaboradores = [{
        id: 0,
        name: "Pedro",
        idade: 18,
        cargo: "Estagiário"
      }, {
        id: 1,
        name: "Larissa",
        idade: 23,
        cargo: "Desenvolvedora"
      }];
      let listaColaboradores = colaboradores.map(colaboradores => {
        return colaboradores.name + colaboradores.idade + colaboradores.cargo;
      });
      return /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("h1", null, "Teste de navigation"), /*#__PURE__*/React__default.default.createElement("h2", null, "Lista de colaboradores: ", listaColaboradores));
    }

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.ComponenteTeste = ComponenteTeste;
    AdminJS.UserComponents.Colaboradores = Colaboradores;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L0NvbXBvbmVudGVzQWRtL2hlbGxvLmpzIiwiLi4vZGlzdC9Db21wb25lbnRlc0FkbS90ZXN0ZUNvbGFib3JhZG9yZXMuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgQ29tcG9uZW50ZVRlc3RlID0gKCkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJIZWxsbyBBZG1pblwiKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudGVUZXN0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIENvbGFib3JhZG9yZXMoKSB7XG4gICAgbGV0IGNvbGFib3JhZG9yZXMgPSBbXG4gICAgICAgIHsgaWQ6IDAsIG5hbWU6IFwiUGVkcm9cIiwgaWRhZGU6IDE4LCBjYXJnbzogXCJFc3RhZ2nDoXJpb1wiIH0sXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiTGFyaXNzYVwiLCBpZGFkZTogMjMsIGNhcmdvOiBcIkRlc2Vudm9sdmVkb3JhXCIgfVxuICAgIF07XG4gICAgbGV0IGxpc3RhQ29sYWJvcmFkb3JlcyA9IGNvbGFib3JhZG9yZXMubWFwKChjb2xhYm9yYWRvcmVzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xhYm9yYWRvcmVzLm5hbWUgKyBjb2xhYm9yYWRvcmVzLmlkYWRlICsgY29sYWJvcmFkb3Jlcy5jYXJnbztcbiAgICB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiVGVzdGUgZGUgbmF2aWdhdGlvblwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsXG4gICAgICAgICAgICBcIkxpc3RhIGRlIGNvbGFib3JhZG9yZXM6IFwiLFxuICAgICAgICAgICAgbGlzdGFDb2xhYm9yYWRvcmVzKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29sYWJvcmFkb3JlcztcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudGVUZXN0ZSBmcm9tICcuLi9kaXN0L0NvbXBvbmVudGVzQWRtL2hlbGxvJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnRlVGVzdGUgPSBDb21wb25lbnRlVGVzdGVcbmltcG9ydCBDb2xhYm9yYWRvcmVzIGZyb20gJy4uL2Rpc3QvQ29tcG9uZW50ZXNBZG0vdGVzdGVDb2xhYm9yYWRvcmVzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db2xhYm9yYWRvcmVzID0gQ29sYWJvcmFkb3JlcyJdLCJuYW1lcyI6WyJDb21wb25lbnRlVGVzdGUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJDb2xhYm9yYWRvcmVzIiwiY29sYWJvcmFkb3JlcyIsImlkIiwibmFtZSIsImlkYWRlIiwiY2FyZ28iLCJsaXN0YUNvbGFib3JhZG9yZXMiLCJtYXAiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxNQUFNQSxlQUFlLEdBQUdBLE1BQU07SUFDMUIsRUFBQSxvQkFBUUMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLGVBQ25DRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOztJQ0hELFNBQVNDLGFBQWFBLEdBQUc7TUFDckIsSUFBSUMsYUFBYSxHQUFHLENBQ2hCO0lBQUVDLElBQUFBLEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVDLElBQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFhLEdBQUMsRUFDeEQ7SUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFBRUMsSUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQWlCLEdBQUMsQ0FDakU7SUFDRCxFQUFBLElBQUlDLGtCQUFrQixHQUFHTCxhQUFhLENBQUNNLEdBQUcsQ0FBRU4sYUFBYSxJQUFLO1FBQzFELE9BQU9BLGFBQWEsQ0FBQ0UsSUFBSSxHQUFHRixhQUFhLENBQUNHLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxLQUFLO0lBQ3pFLEVBQUEsQ0FBQyxDQUFDO0lBQ0YsRUFBQSxvQkFBUVAsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLGVBQ25DRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxlQUN0REQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQzFCLDBCQUEwQixFQUMxQk8sa0JBQWtCLENBQUMsQ0FBQztJQUNoQzs7SUNkQUUsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtJQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNaLGVBQWUsR0FBR0EsZUFBZTtJQUV4RFcsT0FBTyxDQUFDQyxjQUFjLENBQUNULGFBQWEsR0FBR0EsYUFBYTs7In0=
