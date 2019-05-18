/**
 * Created by K0410007 on 2018/6/4.
 */
export function  registerModel(app, model) {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }

}
