import type { RouteLocationRaw } from 'vue-router'
import type { Component } from 'vue'

export interface MenuItem {
  toRoute: RouteLocationRaw
  text: string
  icon?: Component
}
