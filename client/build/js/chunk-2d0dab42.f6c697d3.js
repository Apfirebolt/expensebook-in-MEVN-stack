(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d0dab42'], {
  '6d75': function (e, t, a) {
    a.r(t); const r = function () {
      const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', { staticClass: '\n    flex flex-col\n    justify-center\n    bg-green-600\n    overflow-hidden\n    min-h-screen\n  ' }, [a('div', { staticClass: 'mt-16 sm:mt-24 lg:mt-0 lg:col-span-8' }, [a('div', { staticClass: '\n            bg-white\n            sm:max-w-md\n            sm:w-full\n            sm:mx-auto\n            sm:rounded-lg\n            sm:overflow-hidden\n          ' }, [a('div', { staticClass: 'px-4 py-8 sm:px-10' }, [e._m(0), a('div', { staticClass: 'mt-6' }, [a('ValidationObserver', {
        scopedSlots: e._u([{
          key: 'default',
          fn(t) {
            const r = t.handleSubmit; return [a('form', { staticClass: 'text-gray-700 space-y-4 flex flex-col', on: { submit(t) { return t.preventDefault(), r(e.attemptSignUp); } } }, [a('div', [a('ValidationProvider', {
              attrs: { name: 'Username', rules: 'required' },
              scopedSlots: e._u([{
                key: 'default',
                fn(t) {
                  const r = t.errors; return [a('t-input-group', { attrs: { label: 'Your Username*', feedback: r[0], variant: r.length > 0 ? 'danger' : '' } }, [a('t-input', {
                    attrs: {
                      placeholder: 'Username', type: 'text', name: 'username', variant: r.length > 0 ? 'danger' : '',
                    },
                    model: { value: e.user.username, callback(t) { e.$set(e.user, 'username', t); }, expression: 'user.username' },
                  })], 1)];
                },
              }], null, !0),
            })], 1), a('div', [a('ValidationProvider', {
              attrs: { name: 'First Name', rules: 'required' },
              scopedSlots: e._u([{
                key: 'default',
                fn(t) {
                  const r = t.errors; return [a('t-input-group', { attrs: { label: 'First Name*', feedback: r[0], variant: r.length > 0 ? 'danger' : '' } }, [a('t-input', {
                    attrs: {
                      placeholder: 'First Name', type: 'text', name: 'firstName', variant: r.length > 0 ? 'danger' : '',
                    },
                    model: { value: e.user.firstName, callback(t) { e.$set(e.user, 'firstName', t); }, expression: 'user.firstName' },
                  })], 1)];
                },
              }], null, !0),
            })], 1), a('div', [a('ValidationProvider', {
              attrs: { name: 'Last Name', rules: 'required' },
              scopedSlots: e._u([{
                key: 'default',
                fn(t) {
                  const r = t.errors; return [a('t-input-group', { attrs: { label: 'Last Name*', feedback: r[0], variant: r.length > 0 ? 'danger' : '' } }, [a('t-input', {
                    attrs: {
                      placeholder: 'Last Name', type: 'text', name: 'lastName', feedback: r[0], variant: r.length > 0 ? 'danger' : '',
                    },
                    model: { value: e.user.lastName, callback(t) { e.$set(e.user, 'lastName', t); }, expression: 'user.lastName' },
                  })], 1)];
                },
              }], null, !0),
            })], 1), a('div', [a('ValidationProvider', {
              attrs: { name: 'Email', rules: 'required|email' },
              scopedSlots: e._u([{
                key: 'default',
                fn(t) {
                  const r = t.errors; return [a('t-input-group', { attrs: { label: 'Email*', feedback: r[0], variant: r.length > 0 ? 'danger' : '' } }, [a('t-input', {
                    attrs: {
                      placeholder: 'Email Address', type: 'email', name: 'email', variant: r.length > 0 ? 'danger' : '',
                    },
                    model: { value: e.user.email, callback(t) { e.$set(e.user, 'email', t); }, expression: 'user.email' },
                  })], 1)];
                },
              }], null, !0),
            })], 1), a('div', [a('ValidationProvider', {
              attrs: { name: 'Password', rules: 'required|min:8' },
              scopedSlots: e._u([{
                key: 'default',
                fn(t) {
                  const r = t.errors; return [a('t-input-group', { attrs: { label: 'Password*', feedback: r[0], variant: r.length > 0 ? 'danger' : '' } }, [a('t-input', {
                    attrs: {
                      placeholder: 'Password', type: 'password', name: 'password', feedback: r[0], variant: r.length > 0 ? 'danger' : '',
                    },
                    model: { value: e.user.password, callback(t) { e.$set(e.user, 'password', t); }, expression: 'user.password' },
                  })], 1)];
                },
              }], null, !0),
            })], 1), a('t-button', { attrs: { type: 'submit' } }, [e._v(' Sign Up ')])], 1)];
          },
        }]),
      }), a('div', { staticClass: 'flex items-center mt-4' }, [a('router-link', { staticClass: 'text-blue-800', attrs: { to: { name: 'Login' } } }, [e._v(' Already have an account ? Sign In ')])], 1)], 1)])])])]);
    }; const n = [function () { const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', [a('h2', { staticClass: 'mb-4 text-center text-3xl font-medium text-gray-500' }, [e._v(' Sign Up ')])]); }]; const s = a('1da1'); const l = (a('96cf'), { name: 'Register', data() { return { user: {} }; }, methods: { attemptSignUp() { const e = this; return Object(s.a)(regeneratorRuntime.mark((function t() { let a; return regeneratorRuntime.wrap(((t) => { while (1) switch (t.prev = t.next) { case 0: return t.next = 2, e.$http.post('users/', e.user); case 2: a = t.sent, a && (e.$toast.show({ content: 'Your have been registered successfully, please login and continue.', type: 'success' }), e.$router.push({ name: 'Login' })); case 4: case 'end': return t.stop(); } }), t); })))(); } } }); const i = l; const u = a('2877'); const o = Object(u.a)(i, r, n, !1, null, null, null); t.default = o.exports;
  },
}]);
// # sourceMappingURL=chunk-2d0dab42.f6c697d3.js.map
