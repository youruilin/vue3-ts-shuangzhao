import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'public']
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'as-needed'
  }),

  /**
   * javascript 规则
   */
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    rules: {
      // 'no-console': 'warn',
      '@stylistic/comma-dangle': ['error', 'never'],
      // 这里需要特别注意
      // 必须严格按照这种数组包裹字符串的形式来定义规则, 否则会与其他规则发生未知的、随机的、难以排查的错误
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/operator-linebreak': ['error', 'after'], // 最佳实践就是放在行尾
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 100, // 每行宽度至多80字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
        }
      ]
    }
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        /** 追加一些其他自定义全局规则 */
        wx: true
      }
    }
  },

  /**
   * vue 规则
   */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // 在这里追加 vue 规则
      // pretter 专注于代码的美观度 （格式化工具）
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true
        }
      ],
      // ESLint 关注于规范
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index', '[id]', '404'] // vue组件名称多单词组成（忽略index.vue）
        }
      ],
      'no-undef': 'error'
    }
  },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'linebreak-style': ['error', 'unix']
    }
  },

  /**
   * prettier 配置
   * 会合并根目录下的prettier.config.js 文件
   * @see https://prettier.io/docs/en/options
   */
  eslintPluginPrettierRecommended
)
