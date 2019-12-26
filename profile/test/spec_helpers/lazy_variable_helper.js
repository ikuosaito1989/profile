/**
 * 遅延変数ヘルパ
 * @example
 * lazy('component', () => {
 *   return mount(Hoge)
 * })
 *
 * lazy('component').vm.hoge()
 */
export default class LazyVariableHelper {
  /**
   * 遅延変数定義を取得する
   * @return {Object} 遅延変数定義
   */
  static get variables() {
    return this._variables
  }

  /**
   * ステータスをリセットする
   */
  static reset() {
    this._variables = {}
  }

  /**
   * 遅延変数を評価もしくは定義する
   * @param {String} name 遅延変数名
   * @param {Function} func 遅延変数定義関数
   * @return {Object} 遅延評価結果 (地変変数定義関数セット時はundefined)
   */
  static lazy(name, func) {
    if (func) {
      beforeEach(function() {
        LazyVariableHelper.variables[name] = { func }
      })
      return
    }

    const variable = LazyVariableHelper.variables[name]
    if (!variable) {
      throw new Error(`lazy('${name}') is not defined.`)
    }

    if (!variable.hasOwnProperty('value')) {
      variable.value = variable.func()
    }

    return variable.value
  }
}
