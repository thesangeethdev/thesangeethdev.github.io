package com.sangeeth.portfolio

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun Sidebar(
    sections: List<String>, selected: String, onSelected: (String) -> Unit, modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.width(220.dp).background(Color(0xFF5F0E8))
            .padding(vertical = 16.dp, horizontal = 12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        sections.forEach { section ->
            SidebarCard(
                text = section,
                isSelected = section == selected,
                onClick = { onSelected(selected) })
        }
    }
}