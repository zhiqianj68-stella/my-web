import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, messages } from '../locales'
import { I18nContext } from './context'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale() {
  const savedLocale = window.localStorage.getItem(STORAGE_KEY)

  if (savedLocale && messages[savedLocale]) {
    return savedLocale
  }

  return navigator.language.toLowerCase().startsWith('zh')
    ? 'zh-CN'
    : DEFAULT_LOCALE
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
    document.title = messages[locale].site.title
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
