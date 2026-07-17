package com.sangeeth.portfolio

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.hoverable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsHoveredAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun NavItem(
    text: String, onClick: () -> Unit, modifier: Modifier = Modifier
) {

    val interactionSource = remember { MutableInteractionSource() }
    val isHovered by interactionSource.collectIsHoveredAsState()

    val animatedFontSize by animateFloatAsState(
        targetValue = if (isHovered) 20f else 14f, label = "fontSize"
    )

    val backgroundColor = if (isHovered)
        MaterialTheme.colorScheme.primary
    else
        Color.Transparent

    Box(
        modifier = Modifier.hoverable(interactionSource = interactionSource)
            .clip(ParallelogramShape(skew = 16f))
            .background(backgroundColor).padding(16.dp, 8.dp)
    ) {

        Text(
            text = text,
            style = MaterialTheme.typography.bodyLarge.copy(
                fontSize = animatedFontSize.sp
            ),
            color = MaterialTheme.colorScheme.onSurface,
            modifier = Modifier.clickable { onClick() }
        )
    }
}